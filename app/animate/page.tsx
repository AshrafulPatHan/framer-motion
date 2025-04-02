import Spline from '@splinetool/react-spline/next';

export default function animate() {
  return (
    <main 
    className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-[90vw] h-[50vh] md:w-[60vw] md:h-[70vh]">
        <Spline
        scene="https://prod.spline.design/tCxjsVqYpW2RQ4mf/scene.splinecode" 
        />
      </div>
      
    </main>
  );
}
