import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Fisica } from "./Fisica";
import { Juridica } from "./Juridica";

@Index("pk_pessoa", ["idpessoa"], { unique: true })
@Entity("pessoa", { schema: "delivery" })
export class Pessoa {
  @PrimaryGeneratedColumn({ type: "integer", name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "nome", length: 50 })
  nome: string;

  @Column("character varying", { name: "identificacaofiscal", length: 14 })
  identificacaofiscal: string;

  @Column("integer", { name: "idsituacaocadastro", nullable: true })
  idsituacaocadastro: number | null;

  @Column("integer", { name: "idsituacaopessoa", nullable: true })
  idsituacaopessoa: number | null;

  @Column("date", { name: "datacadastro", nullable: true })
  datacadastro: string | null;

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

  @Column("date", { name: "dataatualizacaocadastro", nullable: true })
  dataatualizacaocadastro: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("smallint", { name: "idnatrelacnegocio", nullable: true })
  idnatrelacnegocio: number | null;

  @Column("smallint", { name: "idsubtiporegistro", nullable: true })
  idsubtiporegistro: number | null;

  @OneToMany(() => Fisica, (fisica) => fisica.idpessoa2)
  fisicas: Fisica[];

  @OneToMany(() => Juridica, (juridica) => juridica.idpessoa2)
  juridicas: Juridica[];
}
