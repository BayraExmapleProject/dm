import CreateName from "@/components/CreateName";
import Name from "@/components/Name";

export default function Home() {
  return (
    <>
      <div className="container ">
        <CreateName />
        <Name />
      </div>
    </>
  );
}
