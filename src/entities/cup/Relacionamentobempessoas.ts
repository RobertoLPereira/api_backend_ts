import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Bem } from "./Bem";

@Index("fki_fk_bemrelac", ["idbem"], {})
@Index("fki_fk_relacbempessoa", ["idpessoa"], {})
@Index("relacionamentobempessoas_pkey", ["idrelacionamentobempessoa"], {
  unique: true,
})
@Entity("relacionamentobempessoas", { schema: "cup" })
export class Relacionamentobempessoas {
  @PrimaryGeneratedColumn({
    type: "integer",
    name: "idrelacionamentobempessoa",
  })
  idrelacionamentobempessoa: number;

  @Column("integer", { name: "idproprietario", default: () => "0" })
  idproprietario: number;

  @Column("integer", { name: "idbem", default: () => "0" })
  idbem: number;

  @Column("integer", { name: "idtipobem", default: () => "0" })
  idtipobem: number;

  @Column("integer", { name: "idnaturezarelacionamento", default: () => "0" })
  idnaturezarelacionamento: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("date", {
    name: "vinculadoem",
    nullable: true,
    default: () => "now()",
  })
  vinculadoem: string | null;

  @Column("date", { name: "desvinculadoem", nullable: true })
  desvinculadoem: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.relacionamentobempessoas)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @ManyToOne(() => Bem, (bem) => bem.relacionamentobempessoas)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
