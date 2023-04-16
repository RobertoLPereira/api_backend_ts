import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("fki_fk_telpessoa", ["idpessoa"], {})
@Index("telefones_pkey", ["idtelefone"], { unique: true })
@Entity("telefones", { schema: "cup" })
export class Telefones {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtelefone" })
  idtelefone: number;

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("character varying", {
    name: "numero",
    nullable: true,
    length: 10,
    default: () => "NULL::character varying",
  })
  numero: string | null;

  @Column("integer", { name: "ddd", nullable: true })
  ddd: number | null;

  @Column("integer", { name: "pais", nullable: true, default: () => "55" })
  pais: number | null;

  @Column("integer", { name: "idprincipal", nullable: true })
  idprincipal: number | null;

  @Column("integer", { name: "idccelular", nullable: true, default: () => "0" })
  idccelular: number | null;

  @Column("character varying", {
    name: "falarcom",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  falarcom: string | null;

  @Column("integer", { name: "ramal", nullable: true })
  ramal: number | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.telefones)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
