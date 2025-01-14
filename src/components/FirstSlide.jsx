import Header from "../components/Header";
import Button from "../components/Button";
import Input from "./Input";
export default function FirstSlide(label) {
  return (
    <div className="w-[416px] h-[591px] p-8 rounded-lg border-1 bg-gray-500 flex flex-col justify-between m-auto ">
      <div>
        <Header />
        <div className="gap-8">
          <Input label="First name" placeholder="Your first name" />
          <Input label="Last name" placeholder="Your last name" />
          <Input label="Username" placeholder="Your username" />
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
