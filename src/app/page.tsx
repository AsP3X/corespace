import UnderDevelopment from "./components/UnderDevelopment";
import NavigationBar from "./components/NavigationBar";
import BottomBar from "./components/BottomBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <UnderDevelopment />
      </main>
    </div>
  );
}
