'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "Q1",
    answers: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2"
  },
  {
    question: "Q2",
    answers: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2"
  },
  {
    question: "Q3",
    answers: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2"
  },
  {
    question: "Q4",
    answers: ["C1", "C2", "C3", "C4"],
    correctAnswer: "C2"
  },
];
const calc_level = (score) => {
  let number_of_question = questions.length - 1
  switch (true) {
    case (score === number_of_question):
      return "Expert";
    case (score >= number_of_question * 0.75):
      return "Intermediate";
    case (score >= number_of_question * 0.5):
      return "Enthusiast";
    default:
      return "Beginner";
  }
}
export default function Home() {
  const [index, change_index] = useState(0)
  const [score, set_score] = useState(0)
  const [is_finished, finished] = useState(false)
  const [level, set_level] = useState("")
  const router = useRouter()

  const answer = (e) => {
    const correct_answer = questions[index].correctAnswer
    if (e.target.id == correct_answer) {
      set_score(prev => prev + 1);
      set_level(calc_level(score))
    }

    if (index != questions.length - 1) {
      change_index(x => x + 1)
    }
    else {
      finished(true);
    }
  }

  const join = () => {
    router.push("/" + level.toLowerCase())
  }
  return (
    <div className="flex justify-center item-center">
      {
        !is_finished ? (
          <div className="card w-96 bg-base-100 shadow-xl p-10">
            <div className="text-sky-500">{questions[index].question}</div>
            <div className="card-body items-center text-center">
              <ul className="flex flex-col gap-3">
                {questions[index].answers.map((x) => <li id={x} key={x} className="btn btn-accent btn-outline" onClick={answer}>{x}</li>)}
              </ul>
            </div>
          </div>

        ) : (
          <>
            <div className="card w-96 bg-base-100 shadow-xl p-5">
              <h1 className="card-title">Finished</h1>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Score</h2> <p>{score}</p>
                <h2 className="card-title">Level</h2> <p>{level}</p>
                <div className="card-actions">
                  <button className="btn btn-primary" onClick={join}>Join</button>
                </div>
              </div>
            </div>
          </>
        )

      }
    </div>
  )
}
