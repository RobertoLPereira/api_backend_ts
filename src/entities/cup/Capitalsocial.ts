import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("capitalsocial_pkey", ["idcapitalsocial"], { unique: true })
@Index("fki_fk_pessoacapital", ["idpessoa"], {})
@Entity("capitalsocial", { schema: "cup" })
export class Capitalsocial {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @Column("double precision", {
    name: "autorizado",
    nullable: true,
    precision: 53,
  })
  autorizado: number | null;

  @Column("double precision", {
    name: "subscrito",
    nullable: true,
    precision: 53,
  })
  subscrito: number | null;

  @Column("double precision", {
    name: "integralizado",
    nullable: true,
    precision: 53,
  })
  integralizado: number | null;

  @Column("double precision", {
    name: "valorcota",
    nullable: true,
    precision: 53,
  })
  valorcota: number | null;

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

  @PrimaryGeneratedColumn({ type: "integer", name: "idcapitalsocial" })
  idcapitalsocial: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.capitalsocials)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
