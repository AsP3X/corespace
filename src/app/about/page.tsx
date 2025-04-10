import BottomBar from '../components/BottomBar';
import NavigationBar from '../components/NavigationBar';
import UnderDevelopment from '../components/UnderDevelopment';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <UnderDevelopment />
      <BottomBar />
    </div>
  );
}
