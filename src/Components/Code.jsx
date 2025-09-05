import React, { useState, useEffect } from "react";
import SigninBtn from "./SigninBtn";
import "../CSSFiles/Code.css";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

function Code(props) {
  const lock = (
    <svg
      width="78px"
      height="78px"
      viewBox="-3.6 -3.6 43.20 43.20"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--twemoji"
      preserveAspectRatio="xMidYMid meet"
      fill="#292929"
      stroke="#292929"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="4.536"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#ff9029"
          d="M18 3C12.477 3 8 7.477 8 13v10h4V13a6 6 0 0 1 12 0v10h4V13c0-5.523-4.477-10-10-10z"
        ></path>
        <path
          fill="#FFAC33"
          d="M31 32a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v12z"
        ></path>
      </g>
    </svg>
  );

  if (!props.islogin) {
    return (
      <div className="foreground" data-aos="fade-in">
        <p>{lock}</p>
        <p>For Accessing our Custom Code feature </p>
        <p>
          <SigninBtn statefn={props.statefn} />
        </p>
      </div>
    );
  }

  const [codeSnippet, setCodeSnippet] = useState("Loading…");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.algorithm || !props.language) return;

    const fetchCode = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!API_KEY) {
          throw new Error(
            "API key not found. Please add API_KEY to your .env file."
          );
        }

        const promptText = `Provide the code for ${props.algorithm} sorting algorithm from scratch, there should be a separate function for sorting, with no comments or bash symbol, in ${props.language}. Return code lines with proper indentation. Only return the code, no explanations. Also don't provide any button to copy or any action only pure code. Also, don't add language name headings or anything else, just the code. Keep all libraries or headers at the top of the code included already, e.g. namespace std for C++. Keep IO operations included if needed. If ${props.language} is not a valid programming language e.g. english, hindi, etc.. or any random word in which we can write sorting algirithm, return "Not Valid Language!! Please Try Different Language." only return this line but in english always. Note: english is not a valid programming language.`;

        const endpoint = `https://api.groq.com/openai/v1/chat/completions`;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: promptText },
            ],
          }),
        });

        if (!res.ok) {
          const errorData = await res.text();
          throw new Error(`HTTP ${res.status}: ${errorData}`);
        }

        const data = await res.json();
        const content = data?.choices[0]?.message?.content || "";
        if (!content) throw new Error("No content in API response");
        setCodeSnippet(content.trim());
      } catch (e) {
        setError(e.message);
        console.error("Error fetching code:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCode();
  }, [props.algorithm, props.language]);

  if (error) {
    return (
      <pre>
        <div className="error-message" data-aos="fade-in">
          <p>
            <b>Error:</b>
          </p>
          <p>It might be due to quota over.</p>
          <p>Please Try Again After Some Time.</p>
        </div>
      </pre>
    );
  }

  if (loading) {
    return (
      <div className="code-container" data-aos="fade-in">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Generating {props.algorithm} code for you...</p>
        </div>
      </div>
    );
  }

  return <pre>{codeSnippet}</pre>;
}

export default Code;
