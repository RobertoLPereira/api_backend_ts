import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("cargoocupacao_pkey", ["idocupacao"], { unique: true })
@Index("fki_fk_ocupacaopessoa", ["idpessoa"], {})
@Entity("cargoocupacao", { schema: "cup" })
export class Cargoocupacao {
  @PrimaryGeneratedColumn({ type: "integer", name: "idocupacao" })
  idocupacao: number;

  @Column("character varying", {
    name: "denominacao",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  denominacao: string | null;

  @Column("integer", { name: "principal", nullable: true })
  principal: number | null;

  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("integer", { name: "status", nullable: true, default: () => "0" })
  status: number | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.cargoocupacaos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;
}
