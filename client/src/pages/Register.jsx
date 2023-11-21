import { useContext } from "react";
import { Alert, Button, Col, Form, Image, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import registerImage from "../assets/register.png";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={12} md={6}>
            <Stack gap={3} style={{ textAlign: "center" }}>
              <Image
                src={registerImage} // Remplacez par l'URL de votre image rectangulaire
                alt="image"
                rounded
                style={{ width: "100%", height: "auto" }}
              />
            </Stack>
          </Col>
          <Col xs={12} md={6} style={{ padding: "5em" }}>
            <Stack gap={3} style={{ textAlign: "center" }}>
              <h2>S'enregistrer</h2>
              <Form.Control
                type="text"
                placeholder="Nom"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    name: e.target.value,
                  })
                }
                value={registerInfo.name}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    email: e.target.value,
                  })
                }
                value={registerInfo.email}
              />
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
                value={registerInfo.password}
              />
              <Button
                variant="primary"
                type="submit"
                disabled={isRegisterLoading}
              >
                {isRegisterLoading ? "En cours..." : "S'enregistrer"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger" style={{ marginTop: "20px" }}>
                  <b>{`Erreur status code: ${registerError?.status}`}</b>
                  <p>{registerError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
