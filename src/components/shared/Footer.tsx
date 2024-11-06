const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} NextMart. All rights reserved.</p>
        <p>Terms | Privacy | Help</p>
      </div>
    </footer>
  );
};

export default Footer;
