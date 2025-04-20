
import Hero from '@/components/home/Hero';
import UrlForm from '@/components/home/UrlForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-xl mx-auto px-4 py-8">
        <UrlForm />
      </section>
    </>
  );
}
