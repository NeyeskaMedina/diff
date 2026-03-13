-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.admin (
  id_admin bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre character varying,
  email character varying,
  contraseña character varying,
  código_temporal numeric,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  palabra_clave_temp character varying,
  CONSTRAINT admin_pkey PRIMARY KEY (id_admin)
);
CREATE TABLE public.categorias (
  id_categoria bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre character varying,
  descripcion text,
  activa boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria)
);
CREATE TABLE public.detalle_pedidos (
  id_detalle_pedido bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
  cant bigint,
  precio_actual double precision NOT NULL,
  subtotal double precision,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  descuento_porc numeric,
  id_producto bigint NOT NULL UNIQUE,
  id_estado_pedido bigint NOT NULL UNIQUE,
  CONSTRAINT detalle_pedidos_pkey PRIMARY KEY (id_detalle_pedido),
  CONSTRAINT detalle_pedidos_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto),
  CONSTRAINT detalle_pedidos_id_estado_pedido_fkey FOREIGN KEY (id_estado_pedido) REFERENCES public.estado_pedidos(id_estado_pedido)
);
CREATE TABLE public.direcciones (
  id_direccion bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
  id_usuario bigint NOT NULL UNIQUE,
  rut_Fact character varying,
  nombre_Fact character varying,
  direccion_Fact character varying,
  ciudad_Fact character varying,
  region_Fact character varying,
  rut_Entr character varying,
  nombre_Entr character varying,
  direccion_Entr character varying,
  ciudad_Entr character varying,
  region_Entr character varying,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT direcciones_pkey PRIMARY KEY (id_direccion, id_usuario),
  CONSTRAINT direcciones_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario)
);
CREATE TABLE public.estado_pedidos (
  id_estado_pedido bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre character varying,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT estado_pedidos_pkey PRIMARY KEY (id_estado_pedido)
);
CREATE TABLE public.pedidos (
  id_pedido bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_detalle_pedido bigint NOT NULL UNIQUE,
  total double precision,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  id_usuario bigint NOT NULL UNIQUE,
  id_direccion bigint NOT NULL UNIQUE,
  CONSTRAINT pedidos_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario),
  CONSTRAINT pedidos_id_direccion_fkey FOREIGN KEY (id_direccion) REFERENCES public.direcciones(id_direccion),
  CONSTRAINT pedidos_id_detalle_pedido_fkey FOREIGN KEY (id_detalle_pedido) REFERENCES public.detalle_pedidos(id_detalle_pedido)
);
CREATE TABLE public.productos (
  id_producto bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  id_categoria bigint NOT NULL UNIQUE,
  nombre character varying,
  descripcion text,
  stock double precision,
  url_Imagen text,
  activo boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  precio_actual double precision,
  precio double precision,
  descuento_porc numeric,
  CONSTRAINT productos_pkey PRIMARY KEY (id_producto),
  CONSTRAINT productos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria)
);
CREATE TABLE public.usuarios (
  id_usuario bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  nombre character varying,
  email character varying,
  telefono character varying,
  contraseña character varying,
  role character varying,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario)
);