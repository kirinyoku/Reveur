import Provider from './components/Provider';

export const metadata = {
  title: 'Admin Panel',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider>{children}</Provider>
    </>
  );
}
