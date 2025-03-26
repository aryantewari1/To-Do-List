import { useRef, useState } from "react";
import "./styles/styles.css";

const App = () => {
  const [pendingList, setPendingList] = useState([]);

  const [inp, setInp] = useState("");

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={inp}
          onChange={(e) => {
            setInp(e.target.value);
          }}
          placeholder="What are you procrastinating for today?"
        />

        <button
          onClick={() => {
            setPendingList([
              ...pendingList,
              {
                id: Math.floor(Math.random() * 100),
                task: inp,
                isChecked: false,
              },
            ]);
          }}
        >
          add
        </button>
      </div>
      <ul className="todos-list">
        {pendingList.map((task) => {
          return (
            <li className="todo">
              {task.task}
              <input
                type="checkbox"
                checked={task.isChecked}
                onChange={() => {
                  setPendingList((prevList) =>
                    prevList.map((t) =>
                      t.id === task.id ? { ...t, isChecked: !t.isChecked } : t
                    )
                  );
                }}
              />
            </li>
          );
        })}
      </ul>

      <button
        className="close"
        onClick={() => {
          const newPendingList = pendingList.filter((task) => {
            return task.isChecked !== true;
          });

          setPendingList(newPendingList);
        }}
      >
        done
      </button>
    </div>
  );
};

export default App;
