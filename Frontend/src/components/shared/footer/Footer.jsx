const Footer = () => {
  return (
    <div className="relative bg-white rounded shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <footer className="bg-base-200 p-4 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by -{" "}
          <a
            className="inline-block text-blue-600"
            href="https://smhasanjamil.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hasan Jamil
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
