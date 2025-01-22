import Image from 'next/image';
import logoHeader from '../../public/logoHeader.png';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="flex justify-between items-center p-5 bg-gray-800 text-white">
      {/* Logo Section */}
      <a href="#Home" className="flex items-center">
        <Image
          src={logoHeader}
          alt="Logo"
          width={130}
          height={50}
          className="rounded-xl"
        />
      </a>


      {/* Copyright Section */}
      <div className="text-sm">
        &copy; {currentYear} PTD_Dev
      </div>
    </footer>
  );
}

export default Footer;
