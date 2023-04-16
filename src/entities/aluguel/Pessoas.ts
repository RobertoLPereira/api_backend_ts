import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Imovel } from "./Imovel";
import { Imovelunidade } from "./Imovelunidade";
import { Taxaadministracao } from "./Taxaadministracao";
import { Vinculos } from "./Vinculos";

@Index("pessoas_pkey", ["idpessoa"], { unique: true })
@Index("pessoas_telefone_key", ["telefone"], { unique: true })
@Entity("pessoas", { schema: "aluguel" })
export class Pessoas {
  @PrimaryGeneratedColumn({ type: "integer", name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "nome", length: 50 })
  nome: string;

  @Column("character varying", { name: "telefone", unique: true, length: 16 })
  telefone: string;

  @Column("boolean", {
    name: "proprietario",
    nullable: true,
    default: () => "false",
  })
  proprietario: boolean | null;

  @Column("timestamp with time zone", { name: "cadastradoem", nullable: true })
  cadastradoem: Date | null;

  @Column("integer", { name: "status", nullable: true, default: () => "1" })
  status: number | null;

  @Column("character varying", {
    name: "url_avatar",
    nullable: true,
    length: 100,
  })
  urlAvatar: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("character varying", {
    name: "sexo",
    nullable: true,
    length: 1,
    default: () => "'M'",
  })
  sexo: string | null;

  @OneToMany(() => Contrato, (contrato) => contrato.idlocador)
  contratoes: Contrato[];

  @OneToMany(() => Contrato, (contrato) => contrato.idlocatario)
  contratoes2: Contrato[];

  @OneToMany(() => Imovel, (imovel) => imovel.idpessoa)
  imovels: Imovel[];

  @OneToMany(() => Imovelunidade, (imovelunidade) => imovelunidade.idpessoa)
  imovelunidades: Imovelunidade[];

  @OneToMany(
    () => Taxaadministracao,
    (taxaadministracao) => taxaadministracao.idpessoa
  )
  taxaadministracaos: Taxaadministracao[];

  @OneToMany(() => Vinculos, (vinculos) => vinculos.idpessoa)
  vinculos: Vinculos[];
}
