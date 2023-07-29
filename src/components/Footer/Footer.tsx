import './Footer.scss'

export interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="footer">
			<figcaption>created by Dan Chanivet</figcaption>
		</footer>
	)
};

export default Footer;
