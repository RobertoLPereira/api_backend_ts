import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("controlecapital_pkey", ["idcontrolecapital"], { unique: true })
@Entity("controlecapital", { schema: "cup" })
export class Controlecapital {
  @Column("double precision", { name: "valor", precision: 53 })
  valor: number;

  @Column("integer", { name: "idsituacao" })
  idsituacao: number;

  @Column("date", { name: "dataatualizacao", nullable: true })
  dataatualizacao: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "idcontrolecapital" })
  idcontrolecapital: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.controlecapitals)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoa;
}
