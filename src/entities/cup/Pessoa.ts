import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Balancopatrimonial } from "./Balancopatrimonial";
import { Bempessoa } from "./Bempessoa";
import { Bensvinculados } from "./Bensvinculados";
import { Capitalsocial } from "./Capitalsocial";
import { Cargoocupacao } from "./Cargoocupacao";
import { Certidao } from "./Certidao";
import { Controlecapital } from "./Controlecapital";
import { Dirigenteempresa } from "./Dirigenteempresa";
import { Endereco } from "./Endereco";
import { Fisica } from "./Fisica";
import { Juridica } from "./Juridica";
import { Pessoaregimetributacao } from "./Pessoaregimetributacao";
import { Relacionamentobempessoas } from "./Relacionamentobempessoas";
import { Relacionamentos } from "./Relacionamentos";
import { Renda } from "./Renda";
import { Telefones } from "./Telefones";

@Index("pk_pessoa", ["idpessoa"], { unique: true })
@Entity("pessoa", { schema: "cup" })
export class Pessoa {
  @PrimaryGeneratedColumn({ type: "integer", name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", { name: "nome", length: 115 })
  nome: string;

  @Column("character varying", { name: "identificacaofiscal", length: 14 })
  identificacaofiscal: string;

  @Column("integer", { name: "idsituacaocadastro", nullable: true })
  idsituacaocadastro: number | null;

  @Column("integer", { name: "idsituacaopessoa", nullable: true })
  idsituacaopessoa: number | null;

  @Column("integer", { name: "idsituacaoreceitafederal", nullable: true })
  idsituacaoreceitafederal: number | null;

  @Column("date", { name: "datacadastro", nullable: true })
  datacadastro: string | null;

  @Column("integer", { name: "idagencia", nullable: true })
  idagencia: number | null;

  @Column("integer", { name: "idposto", nullable: true })
  idposto: number | null;

  @Column("date", { name: "clientedesde", nullable: true })
  clientedesde: string | null;

  @Column("integer", { name: "idorigem", nullable: true })
  idorigem: number | null;

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

  @Column("date", { name: "dataatualizacaocadastro", nullable: true })
  dataatualizacaocadastro: string | null;

  @Column("character varying", {
    name: "nomeusuario",
    nullable: true,
    length: 50,
  })
  nomeusuario: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("smallint", { name: "idnatrelacnegocio", nullable: true })
  idnatrelacnegocio: number | null;

  @Column("smallint", { name: "nivelsigilo", nullable: true })
  nivelsigilo: number | null;

  @Column("smallint", { name: "idsubtiporegistro", nullable: true })
  idsubtiporegistro: number | null;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @OneToMany(
    () => Balancopatrimonial,
    (balancopatrimonial) => balancopatrimonial.idpessoa2
  )
  balancopatrimonials: Balancopatrimonial[];

  @OneToMany(() => Bempessoa, (bempessoa) => bempessoa.idpessoa2)
  bempessoas: Bempessoa[];

  @OneToMany(() => Bensvinculados, (bensvinculados) => bensvinculados.idpessoa2)
  bensvinculados: Bensvinculados[];

  @OneToMany(() => Capitalsocial, (capitalsocial) => capitalsocial.idpessoa2)
  capitalsocials: Capitalsocial[];

  @OneToMany(() => Cargoocupacao, (cargoocupacao) => cargoocupacao.idpessoa2)
  cargoocupacaos: Cargoocupacao[];

  @OneToMany(() => Certidao, (certidao) => certidao.idpessoa2)
  certidaos: Certidao[];

  @OneToMany(
    () => Controlecapital,
    (controlecapital) => controlecapital.idpessoa
  )
  controlecapitals: Controlecapital[];

  @OneToMany(
    () => Dirigenteempresa,
    (dirigenteempresa) => dirigenteempresa.idpessoafisica2
  )
  dirigenteempresas: Dirigenteempresa[];

  @OneToMany(
    () => Dirigenteempresa,
    (dirigenteempresa) => dirigenteempresa.idpessoajuridica2
  )
  dirigenteempresas2: Dirigenteempresa[];

  @OneToMany(() => Endereco, (endereco) => endereco.idpessoa2)
  enderecos: Endereco[];

  @OneToMany(() => Fisica, (fisica) => fisica.pessoa)
  fisica: Fisica[];

  @OneToMany(() => Juridica, (juridica) => juridica.pessoa)
  juridica: Juridica[];

  @OneToMany(
    () => Pessoaregimetributacao,
    (pessoaregimetributacao) => pessoaregimetributacao.idpessoa2
  )
  pessoaregimetributacaos: Pessoaregimetributacao[];

  @OneToMany(
    () => Relacionamentobempessoas,
    (relacionamentobempessoas) => relacionamentobempessoas.idpessoa2
  )
  relacionamentobempessoas: Relacionamentobempessoas[];

  @OneToMany(
    () => Relacionamentos,
    (relacionamentos) => relacionamentos.idpessoa2
  )
  relacionamentos: Relacionamentos[];

  @OneToMany(
    () => Relacionamentos,
    (relacionamentos) => relacionamentos.idpessoarelacionada2
  )
  relacionamentos2: Relacionamentos[];

  @OneToMany(() => Renda, (renda) => renda.idpessoa)
  rendas: Renda[];

  @OneToMany(() => Telefones, (telefones) => telefones.idpessoa2)
  telefones: Telefones[];
}
