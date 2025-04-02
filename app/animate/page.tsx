import Spline from '@splinetool/react-spline/next';

export default function animate() {
  return (
    <main >
      <Spline
        scene="https://prod.spline.design/tCxjsVqYpW2RQ4mf/scene.splinecode" 
        className='w-[50vw] '
      />
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/tCxjsVqYpW2RQ4mf/scene.splinecode"></spline-viewer> */}
    </main>
  );
}
