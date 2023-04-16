import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_login", ["codigo"], { unique: true })
@Entity("login", { schema: "nfefacil" })
export class Login {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character varying", { name: "usuario", nullable: true, length: 10 })
  usuario: string | null;

  @Column("character varying", { name: "senha", nullable: true, length: 10 })
  senha: string | null;

  @Column("character varying", { name: "nome", nullable: true, length: 50 })
  nome: string | null;

  @Column("character", { name: "modelonfe", nullable: true, length: 2 })
  modelonfe: string | null;

  @Column("character", { name: "nivel", nullable: true, length: 1 })
  nivel: string | null;

  @Column("character", { name: "alterar_qtde", nullable: true, length: 1 })
  alterarQtde: string | null;
}
