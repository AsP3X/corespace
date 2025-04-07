import UnderDevelopment from './components/UnderDevelopment';
import NavigationBar from './components/NavigationBar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">
        <UnderDevelopment />
      </main>
    </div>
  );
}
