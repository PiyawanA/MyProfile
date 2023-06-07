import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import "../styles/Contact.css";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: 40,
  textAlign: "center",
  color: "black",
  marginTop: 30
}));

function Contact() {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid container className="container-item">
        <Item>
          <h1>Contact</h1>
          <Grid
            container
            className="detail-con"
            component={Link}
            href="https://www.google.co.th/maps/search/59%2F13+Moo+1,+Tha+Sai-Bang+Yee,+Khlong+Hae,+Hat+Yai+,+Songkhla+90110/@7.0386892,100.4479208,15z/data=!3m1!4b1?hl=th&entry=ttu"
            target="_blank"
            underline="none"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              marginBottom={{ xs: 1, sm: 1, md: 0 }}
            >
              <PlaceIcon sx={{ color: "#D64B4B" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              textAlign={{ md: "left" }}
              className="text-content"
            >
              59/13 Moo 1, Tha Sai-Bang Yee, Khlong Hae, Hat Yai , Songkhla
              90110
            </Grid>

            {/* <Grid item xs={12} sm={12} md={1}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15838.998335217584!2d100.44792084048024!3d7.038689183530382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s59%2F13%20Moo%201%2C%20Tha%20Sai-Bang%20Yee%2C%20Khlong%20Hae%2C%20Hat%20Yai%20%2C%20Songkhla%2090110!5e0!3m2!1sth!2sth!4v1686059524495!5m2!1sth!2sth"
                width="300"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid> */}
          </Grid>
          <Divider />

          <Grid
            container
            className="detail-con"
            component={Link}
            href="tel:0935822427"
            target="_blank"
            underline="none"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              marginBottom={{ xs: 1, sm: 1, md: 0 }}
            >
              <PhoneIcon sx={{ color: "#632B58" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              textAlign={{ md: "left" }}
              className="text-content"
            >
              093-582-2427
            </Grid>
          </Grid>
          <Divider />

          <Grid
            container
            className="detail-con"
            component={Link}
            href="mailto:piyawan.arakk@gmail.com"
            target="_blank"
            underline="none"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              marginBottom={{ xs: 1, sm: 1, md: 0 }}
            >
              <EmailIcon sx={{ color: "#D64B4B" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              textAlign={{ md: "left" }}
              className="text-content"
            >
              piyawan.arakk@gmail.com
            </Grid>
          </Grid>
          <Divider />

          <Grid
            container
            className="detail-con"
            component={Link}
            href="https://www.facebook.com/profile.php?id=100003811156812"
            target="_blank"
            underline="none"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              marginBottom={{ xs: 1, sm: 1, md: 0 }}
            >
              <FacebookIcon />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              textAlign={{ md: "left" }}
              className="text-content"
            >
              Jaa Piyawan Arakkunakorn
            </Grid>
          </Grid>
          <Divider />

          <Grid
            container
            className="detail-con"
            component={Link}
            href="https://github.com/PiyawanA"
            target="_blank"
            underline="none"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={1}
              marginBottom={{ xs: 1, sm: 1, md: 0 }}
            >
              <GitHubIcon sx={{ color: "#000000" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              textAlign={{ md: "left" }}
              className="text-content"
            >
              PiyawanA
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Container>
  );
}

export default Contact;
