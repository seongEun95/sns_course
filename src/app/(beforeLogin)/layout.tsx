export default function Layout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <main>
      비포로그인 레이아웃
      {children}
      {modal}
    </main>
  );
}
