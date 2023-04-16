import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("forma_pagto_descricao_key", ["descricao"], { unique: true })
@Index("forma_pagto_pkey", ["id"], { unique: true })
@Entity("forma_pagto", { schema: "pdvandroid" })
export class FormaPagto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "descricao", unique: true, length: 20 })
  descricao: string;

  @Column("integer", { name: "cod_sefaz" })
  codSefaz: number;
}
