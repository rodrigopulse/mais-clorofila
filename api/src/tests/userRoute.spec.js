const request = require("supertest");

describe("Testa as rotas de User", () => {
  it("Registra o usuário", async () => {
    const res = await request("localhost:8082").post("/user/register").send({
      email: "testejest@teste.com.br",
      password: "teste",
    });
    expect(res.status).toEqual(200);
  });

  it("Faz login com sucesso", async () => {
    const res = await request("localhost:8082").post("/user/login").send({
      email: "testejest@teste.com.br",
      password: "teste",
    });
    expect(res.status).toEqual(200);
  });

  it("Tenta login com senha errada", async () => {
    const res = await request("localhost:8082").post("/user/login").send({
      email: "testejest@teste.com.br",
      password: "teste1",
    });
    expect(res.status).toEqual(401);
  });

  it("Deleta o usuário", async () => {
    const res = await request("localhost:8082").delete(
      "/user/delete/testejest@teste.com.br"
    );
    expect(res.status).toEqual(200);
  });
});
