import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import React, { FC } from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterAside,
  FooterBlockWrapper,
  FooterTitle,
  FooterLink,
  FooterImg,
  FooterLinkSmall,
  FooterImgSmall,
  FooterAsideBlock,
  FooterBlockWrapperMob,
  FooterAsideBlockMob,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBlockWrapper style={{ flexGrow: 1 }}>
          <FooterTitle>Prometheus</FooterTitle>
          <FooterLink
            onClick={() =>
              window.open("https://prometheus.org.ua/about-us/", "_blank")
            }
          >
            Про нас
          </FooterLink>
        </FooterBlockWrapper>

        <FooterBlockWrapperMob>
          <FooterTitle>Prometheus+</FooterTitle>
          <FooterLink
            onClick={() =>
              window.open(
                "https://prometheus.org.ua/corporate-learning/",
                "_blank"
              )
            }
          >
            Корпоративне навчання
          </FooterLink>
          <FooterLink
            onClick={() =>
              window.open("https://prometheus.org.ua/partnership/", "_blank")
            }
          >
            Співпраця
          </FooterLink>
        </FooterBlockWrapperMob>

        <FooterBlockWrapper style={{ flexGrow: 1, alignItems: "flex-start" }}>
          <FooterTitle>Мобільні застосунки</FooterTitle>
          <FooterImg
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=org.prometheus.android",
                "_blank"
              )
            }
            src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/google-play.svg?x38305"
          />
          <FooterImg
            onClick={() =>
              window.open(
                "https://itunes.apple.com/us/app/prometheus-online-courses/id1213523151",
                "_blank"
              )
            }
            src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/app-store.svg?x38305"
          />
        </FooterBlockWrapper>
      </FooterContainer>
      <Divider variant="middle" />
      <FooterAside>
        <FooterAsideBlockMob>
          <FooterLinkSmall
            onClick={() => window.open("https://prometheus.org.ua/", "_blank")}
          >
            © 2024 Prometheus
          </FooterLinkSmall>
          <FooterLinkSmall
            onClick={() =>
              window.open("https://prometheus.org.ua/privacy-policy/", "_blank")
            }
          >
            Політика конфіденційності
          </FooterLinkSmall>
          <FooterLinkSmall
            onClick={() =>
              window.open("https://prometheus.org.ua/offert/", "_blank")
            }
          >
            Договір публічної оферти
          </FooterLinkSmall>
          <FooterLinkSmall
            onClick={() =>
              window.open("https://prometheus.org.ua/faq/", "_blank")
            }
          >
            Допомога
          </FooterLinkSmall>
        </FooterAsideBlockMob>
        <FooterAsideBlock style={{ marginLeft: "8%", gap: "20px" }}>
          <FooterImgSmall src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/visa-logo.svg?x38305" />
          <FooterImgSmall src="https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/mastercard-logo.svg?x38305" />
        </FooterAsideBlock>
        <FooterAsideBlock style={{ marginLeft: "36px" }}>
          <FontAwesomeIcon
            onClick={() =>
              window.open("https://www.facebook.com/prometheusmooc", "_blank")
            }
            icon={faFacebook}
            style={{ color: "#000000" }}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={() =>
              window.open("https://twitter.com/prometheusmooc", "_blank")
            }
            icon={faTwitter}
            style={{ color: "#000000" }}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={() =>
              window.open("https://www.instagram.com/prometheus.ua", "_blank")
            }
            icon={faInstagram}
            style={{ color: "#000000" }}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCp_ZjjvKE_lScv09caE6z3A",
                "_blank"
              )
            }
            icon={faYoutube}
            style={{ color: "#000000" }}
            size="2x"
          />
        </FooterAsideBlock>
      </FooterAside>
    </FooterWrapper>
  );
};

export default Footer;
