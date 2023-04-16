import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("pk_certidoes", ["dataemissao", "idpessoa", "numero"], { unique: true })
@Index("fki_fk_certidaopessoa", ["idpessoa"], {})
@Entity("certidao", { schema: "cup" })
export class Certidao {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcertidao" })
  idcertidao: number;

  @Column("integer", { primary: true, name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "nomecertidao", length: 100 })
  nomecertidao: string;

  @Column("date", { primary: true, name: "dataemissao" })
  dataemissao: string;

  @Column("date", { name: "validade", nullable: true })
  validade: string | null;

  @Column("character varying", { primary: true, name: "numero", length: 20 })
  numero: string;

  @Column("character varying", { name: "controle", nullable: true, length: 40 })
  controle: string | null;

  @Column("character varying", { name: "site", nullable: true, length: 50 })
  site: string | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column("date", {
    name: "dataatualizacao",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacao: string | null;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.certidaos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
