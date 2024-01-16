import ThemeChanger from "@/Components/Parts/ThemeChanger";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <div className="h-full">
        <ThemeChanger />
      </div>
    </>
  );
}
