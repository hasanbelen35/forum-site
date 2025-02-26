import Home from '@/components/home/Home';
import HomeNav from '@/components/home/HomeNav';  
export default function Page() {
  return (
    <div className=' dark:bg-darkBg h-screen bg-grayBg'>
      <HomeNav />
      <Home />
    </div>

  );
}
