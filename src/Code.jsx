import React, { useState, useEffect } from "react";
import SigninBtn from "./SigninBtn";
import "./Code.css";

const GEMINI_API_KEY = "AIzaSyCrWN9qdi6sAOdQ_hdQh0yc_lBtO-0ikXo";

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
          <SigninBtn />
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
        if (!GEMINI_API_KEY) {
          throw new Error(
            "Gemini API key not found. Please add REACT_APP_GEMINI_API_KEY to your .env file."
          );
        }

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Provide the code for ${algorithm} sorting algorithm from scratch that includes an int main function and a separate function for sorting, along with important comments, in ${language}. Return code lines with proper indentation. Only return the code, no explanations. Also don't provide any button to copy or any action only pure code. Also don't add name of language as heading or anything just write the code. Also, keep all libraries or headers at the top of the code included already if need and include things like namespace std already in top if needed i/o operations. If it is not possible to write in the language given or the language given doesn't support the algorithm then return "Not Valid Language!! Please Try Different Language.`,
                    },
                  ],
                },
              ],
            }),
          }
        );

        if (!res.ok) {
          const errorData = await res.text();
          throw new Error(`HTTP ${res.status}: ${errorData}`);
        }

        const data = await res.json();
        // Access the text content
        const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!content) throw new Error("No content in API response");

        // Clean the response by removing markdown code block markers
        let cleanedContent = content;
        // Remove opening code block markers like ```java, ```cpp, ```python, etc.
        cleanedContent = cleanedContent.replace(/```\w*\n?/gm, "");
        // Remove closing code block markers (handle multiple variations)
        cleanedContent = cleanedContent.replace(/\n?```\s*$/gm, "");
        cleanedContent = cleanedContent.replace(/```\s*$/gm, "");
        // Remove any remaining ``` that might be at the end
        cleanedContent = cleanedContent.replace(/```/g, "");
        // Trim any extra whitespace
        cleanedContent = cleanedContent.trim();

        setCodeSnippet(cleanedContent);
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
        <div className="error-message">
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
      <div className="code-container">
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
