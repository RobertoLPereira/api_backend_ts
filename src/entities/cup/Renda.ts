import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("renda_pkey", ["idrenda"], { unique: true })
@Entity("renda", { schema: "cup" })
export class Renda {
  @PrimaryGeneratedColumn({ type: "integer", name: "idrenda" })
  idrenda: number;

  @Column("integer", { name: "idtiporenda", nullable: true })
  idtiporenda: number | null;

  @Column("integer", { name: "idtipomoeda", nullable: true })
  idtipomoeda: number | null;

  @Column("character varying", { name: "valor", nullable: true, length: 255 })
  valor: string | null;

  @Column("timestamp with time zone", { name: "valorizadaem", nullable: true })
  valorizadaem: Date | null;

  @Column("integer", { name: "idempregador", nullable: true })
  idempregador: number | null;

  @Column("integer", { name: "idsituacao", nullable: true })
  idsituacao: number | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.rendas, { onUpdate: "CASCADE" })
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa: Pessoa;
}
