-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.users (
  id_user bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  correo character varying,
  clave character varying,
  CONSTRAINT users_pkey PRIMARY KEY (id_user)
);

