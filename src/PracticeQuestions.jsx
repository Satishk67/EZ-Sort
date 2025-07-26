import "./PracticeQuestions.css";
import SigninBtn from "./SigninBtn";
function PracticeQuestions(props){

    const lock = (
        <svg
          width="78px"
          height="78px"
          viewBox="-3.6 -3.6 43.20 43.20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="iconify iconify--twemoji"
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

    if(!props.islogin){
        return(
            <div className="practice-questions">
            <div className="foreground">
        <p>{lock}</p>
        <p>For Accessing Practice Questions Section. Please Sign In. </p>
        <p>
          <SigninBtn />
        </p>
      </div>
            </div>
        );
    }

    const question = {
        "Bubble Sort": [
          {
            name: "Do Bubble Sort",
            gfg: "https://www.geeksforgeeks.org/problems/bubble-sort/1?utm_source=chatgpt.com",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Ants on a circle",
            gfg: "https://www.hackerearth.com/problem/algorithm/ants-on-the-circle-928dbbba/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Shubham and Xor",
            gfg: "https://www.hackerearth.com/problem/algorithm/shubham-and-xor-8526868e/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Easy Going (Very easy)",
            gfg: "https://www.hackerearth.com/problem/algorithm/min-max-difference/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "The Best Player",
            gfg: "https://www.hackerearth.com/problem/algorithm/the-best-player-1/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Save Patients",
            gfg: "https://www.hackerearth.com/problem/algorithm/save-patients/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Balanced Partition",
            gfg: "https://www.hackerearth.com/problem/algorithm/balanced-partition-818edecd/",
            read: "https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-bubble-sort/?utm_source=chatgpt.com",
            read: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-bubble-sort/?utm_source=chatgpt.com",
          },
        ],
        "Selection Sort": [
          {
            name: "Do Selection Sort",
            gfg: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Only Keypad in a foreign Land",
            gfg: "https://www.hackerearth.com/problem/algorithm/only-keypad-in-a-foreign-land/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Sort Colors",
            gfg: "https://leetcode.com/problems/sort-colors/discuss/1909519/selection-sort/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Largest Number",
            gfg: "https://leetcode.com/problems/largest-number/discuss/863455/selection-sort/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Iterative Selection Sort on a Linked List",
            gfg: "https://www.geeksforgeeks.org/dsa/iterative-selection-sort-for-linked-list/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Kth Largest number in array",
            gfg: "https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60306/Python-different-solutions-with-comments-%28bubble-sort-selection-sort-heap-sort-and-quick-sort%29./852293/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Find Target indices after Sorting",
            gfg: "https://leetcode.com/problems/find-target-indices-after-sorting-array/discuss/1661667/javascript-using-selection-sort/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-selection-sort/",
            read: "https://www.geeksforgeeks.org/dsa/selection-sort-algorithm/",
          },
        ],
        "Insertion Sort": [
          {
            name: "Do Insertion Sort",
            gfg: "https://www.geeksforgeeks.org/problems/insertion-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Sort nearly sorted array",
            gfg: "https://www.hackerrank.com/challenges/insertionsort1/problem/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Insertion Sort List",
            gfg: "https://leetcode.com/problems/insertion-sort-list/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Recursive Insertion Sort",
            gfg: "https://www.geeksforgeeks.org/recursive-insertion-sort/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Binary Insertion Sort",
            gfg: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Count Shift Operations",
            gfg: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Insertion Sort on Bash Array",
            gfg: "https://www.geeksforgeeks.org/c/c-program-for-insertion-sort/",
            read: "https://www.geeksforgeeks.org/dsa/insertion-sort-algorithm/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-insertion-sort/",
            read: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-insertion-sort/",
          },
        ],
        "Merge Sort": [
          {
            name: "Do Merge Sort",
            gfg: "https://www.geeksforgeeks.org/problems/merge-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/merge-sort/",
          },
          {
            name: "Merge Two Sorted Array",
            gfg: "https://leetcode.com/problems/merge-sorted-array/",
            read: "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/",
          },
          {
            name: "Intersection of Two Sorted Array",
            gfg: "https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-array-1587115620/1",
            read: "https://www.geeksforgeeks.org/intersection-of-two-sorted-arrays/",
          },
          {
            name: "External Sorting",
            gfg: "https://www.geeksforgeeks.org/dsa/external-sorting/",
            read: "https://www.geeksforgeeks.org/external-sorting/",
          },
          {
            name: "Substring with more 1s than 0s",
            gfg: "https://www.geeksforgeeks.org/problems/f72994353d123b925ff20f0694b662191df03ea2/1",
            read: "https://www.geeksforgeeks.org/count-of-substrings-in-a-binary-string-that-contains-more-1s-than-0s/",
          },
          {
            name: "Merge Two BST",
            gfg: "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1",
            read: "https://www.geeksforgeeks.org/count-of-substrings-in-a-binary-string-that-contains-more-1s-than-0s/",
          },
          {
            name: "Merge K sorted arrays",
            gfg: "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
            read: "https://www.geeksforgeeks.org/external-sorting/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/merge-sort-interview-questions-and-answers/",
            read: "https://www.geeksforgeeks.org/dsa/merge-sort-interview-questions-and-answers/",
          },
        ],
        "Quick Sort": [
          {
            name: "Do Quick Sort",
            gfg: "https://www.geeksforgeeks.org/problems/quick-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "A cricket Tournament",
            gfg: "https://www.hackerearth.com/problem/algorithm/chef-and-chefa-a5c8800a/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Eating Apples",
            gfg: "https://www.hackerearth.com/problem/algorithm/snake-b0112afa/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Find the next!",
            gfg: "https://www.hackerearth.com/problem/algorithm/yet-to-keep-6f89250c/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Max Power",
            gfg: "https://www.hackerearth.com/problem/algorithm/increasing-subsequence-fbb63e3c/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Card Game",
            gfg: "https://www.hackerearth.com/problem/algorithm/card-game-1-44e9f4e7/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Missing Number",
            gfg: "https://www.hackerearth.com/problem/algorithm/biggest-cake-possible-6d5915e7/",
            read: "https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-quick-sort/",
            read: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-quick-sort/",
          },
        ],
        "Heap Sort": [
          {
            name: "Do Heap Sort",
            gfg: "https://www.geeksforgeeks.org/problems/heap-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Raghu vs Sayan",
            gfg: "https://www.hackerearth.com/problem/algorithm/raghu-vs-sayan/",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Divide Apples",
            gfg: "https://www.hackerearth.com/problem/algorithm/divide-apples/",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Secret Chat",
            gfg: "https://www.hackerearth.com/problem/algorithm/chandu-and-chandnis-secret-chat/",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Cube Change",
            gfg: "https://www.hackerearth.com/problem/algorithm/cube-change-qualifier2/",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Do Heap Sort",
            gfg: "https://www.geeksforgeeks.org/problems/heap-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Do Heap Sort",
            gfg: "https://www.geeksforgeeks.org/problems/heap-sort/1",
            read: "https://www.geeksforgeeks.org/dsa/heap-sort/",
          },
          {
            name: "Interview Questions",
            gfg: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-heap-sort/",
            read: "https://www.geeksforgeeks.org/dsa/top-interview-questions-and-answers-on-heap-sort/",
          },
        ],
      };
    

    return(
        <ul className="grid question-list">
        {question[props.algo].map((q, index) => (
          <div key={index} className="problemrow flexbox" data-aos="fade-up">
            <p className="name">
              {q.name}
            </p>
            <a href={q.gfg} target="_blank" className="practice-link">
              Practice
            </a>
            <a href={q.read} target="_blank" className="read">
              Tutorial
            </a>
          </div>
        ))}
      </ul>
    );
}
export default PracticeQuestions;
