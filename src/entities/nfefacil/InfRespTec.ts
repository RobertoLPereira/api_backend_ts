import { Column, Entity, Index } from "typeorm";

@Index("pk_infresptec", ["codigo"], { unique: true })
@Entity("inf_resp_tec", { schema: "nfefacil" })
export class InfRespTec {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character", { name: "cnpj", length: 14 })
  cnpj: string;

  @Column("character varying", { name: "contato", length: 60 })
  contato: string;

  @Column("character varying", { name: "email", length: 60 })
  email: string;

  @Column("character", { name: "fone", length: 14 })
  fone: string;

  @Column("character", { name: "idcsrt", length: 2 })
  idcsrt: string;

  @Column("character", { name: "csrt", length: 36 })
  csrt: string;
}
