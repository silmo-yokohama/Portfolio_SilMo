import GuestHeader from "@/Components/Template/Headers/GuestHeader";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <div className="h-full">
        <GuestHeader />
      </div>
    </>
  );
}
