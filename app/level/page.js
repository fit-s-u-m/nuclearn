'use client';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const go_to_biginner = () => {
    router.push("/biginner")
  }
  const go_to_enthusiast = () => {
    router.push("/enthusiast")
  }
  const go_to_itermidiate = () => {
    router.push("/itermidiate")
  }
  const go_to_expert = () => {
    router.push("/expert")
  }
  const go_to_quiz = () => {
    router.push("/quiz")
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="px-10 pt-10 flex justify-center flex-col gap-8 h-full  items-center">
            <button className="btn btn-outline btn-accent" onClick={go_to_biginner}>Biginner</button>
            <button className="btn btn-outline btn-accent" onClick={go_to_enthusiast}>Enthusiast</button>
            <button className="btn btn-outline btn-accent" onClick={go_to_itermidiate}>Intermidiate</button>
            <button className="btn btn-outline btn-accent" onClick={go_to_expert}>Expert</button>

          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Levels</h2>
            <p>if you couldn't know what level you are?</p>
            <div className="card-actions">
              <button className="btn btn-primary" onClick={go_to_quiz}>Take a quick quiz</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
