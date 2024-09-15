import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Let's start saving <span className="accent">Some Money</span>
        </h1>
        <p>
          Work towards your financial goals with the help of the tracker buddy
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What's your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro