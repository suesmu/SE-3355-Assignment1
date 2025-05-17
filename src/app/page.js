import QuickLinks from '@/components/QuickLinks';
import MainSlider from '@/components/MainSlider';
import ElektronikSlider from '@/components/ElektronikSlider'; 
import SanaOzelCard from '@/components/SanaOzelCard'; 
import GezilenUrunler from '@/components/GezilenUrunler';



export default function Home() {
  return (
    <main className="p-6">
      
      
      <QuickLinks />
      {}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-[70%]">
          <MainSlider />
          
        </div>
        <div className="md:w-[30%]">
          <ElektronikSlider />
          
        </div>
       
      </div>
       <SanaOzelCard />
       <GezilenUrunler />
    </main>
  );
}
