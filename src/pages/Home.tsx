import TabBar from './../components/TabBar';
import IDOList from './../components/IDOList';
function HomePage() {
  return (
    <main className="flex-grow mt-[100px] px-[200px]">
      <section>
        <TabBar />
        <IDOList />
      </section>
    </main>
  );
}

export default HomePage;
