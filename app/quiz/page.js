'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "1. What is the primary source of energy in a nuclear reactor?",
    answers: ["a) Coal", "b) Uranium", "c) Natural Gas", "d) Solar Power"],
    correctAnswer: "b) Uranium"
  },
  {
    question: "2. Which of the following particles is used to initiate a nuclear chain reaction?",
    answers: ["a) Protons", "b) Electrons", "c) Neutrons", "d) Positrons"],
    correctAnswer: "c) Neutrons"
  },
  {
    question: "3. What is the purpose of control rods in a nuclear reactor?",
    answers: ["a) To produce electricity", "b) To regulate the temperature", "c) To absorb excess neutrons", "d) To facilitate fission reactions"],
    correctAnswer: "c) To absorb excess neutrons"
  },
  {
    question: "4. Which type of nuclear reactor is most commonly used in power generation?",
    answers: ["a) Fast Breeder Reactor", "b) Pressurized Water Reactor", "c) Boiling Water Reactor", "d) Gas-Cooled Reactor"],
    correctAnswer: "b) Pressurized Water Reactor"
  },
  {
    question: "5. What is the half-life of uranium-235?",
    answers: ["a) 4.5 billion years", "b) 700 million years", "c) 1,600 years", "d) 24,000 years"],
    correctAnswer: "b) 700 million years"
  },
  {
    question: "6. Which of the following is a potential alternative fuel for nuclear reactors, often touted for its abundance and reduced nuclear waste?",
    answers: ["a) Plutonium", "b) Thorium", "c) Americium", "d) Curium"],
    correctAnswer: "b) Thorium"
  },
  {
    question: "7. What is a primary advantage of small modular reactors (SMRs)?",
    answers: ["a) Lower construction costs", "b) Higher electricity generation", "c) Enhanced safety features", "d) Longer operational lifetimes"],
    correctAnswer: "a) Lower construction costs"
  },
  {
    question: "8. What is the main purpose of a nuclear reactor coolant?",
    answers: ["a) To absorb excess neutrons", "b) To regulate the reactor's temperature", "c) To facilitate fission reactions", "d) To shield against radiation"],
    correctAnswer: "b) To regulate the reactor's temperature"
  },
  {
    question: "9. Which of the following is a byproduct of nuclear fission reactions that can be reused as fuel in certain reactor designs?",
    answers: ["a) Deuterium", "b) Tritium", "c) Plutonium", "d) Xenon"],
    correctAnswer: "c) Plutonium"
  },
  {
    question: "10. What is the primary challenge associated with nuclear waste management?",
    answers: ["a) Finding suitable disposal sites", "b) Minimizing radiation exposure", "c) Preventing nuclear proliferation", "d) Ensuring reactor safety"],
    correctAnswer: "a) Finding suitable disposal sites"
  },
];
const calc_level = (score) => {
  let number_of_question = questions.length - 1
  switch (true) {
    case (score >= number_of_question * .9):
      return "Expert";
    case (score >= number_of_question * 0.7):
      return "Intermidiate";
    case (score >= number_of_question * 0.4):
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
