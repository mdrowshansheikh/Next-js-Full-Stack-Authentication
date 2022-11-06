/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import login_validate from '../lib/validate';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    alert(values);
    console.log(values);
  }

  const [show, setShow] = useState(false);

  const handelGithubSignIn = async () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
              //   onChange={formik.handleChange}
              //   value={formik.values.email}
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/* // Email Validation ================== Start */}
          {formik.errors.email && formik.touched.email ? (
            <span className="text-red-500 font-bold">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}
          {/* // Email Validation ================== End */}
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? 'border-rose-500'
                : ''
            }`}
          >
            <input
              className={styles.input_text}
              type={`${show ? 'text' : 'password'}`}
              name="password"
              onChange={formik.handleChange}
              //   value={formik.values.password}
              //   placeholder="password"
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* // Password Validation ==================> Start */}
          {formik.errors.password && formik.touched.password ? (
            <span className="text-red-500 font-bold">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}
          {/* // Password Validation ==================> End */}
          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign In with Google{' '}
              <Image src={'/assets/google.svg'} width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handelGithubSignIn}
              type="button"
              className={styles.button_custom}
            >
              Sign In with Github{' '}
              <Image src={'/assets/github.svg'} width={25} height={25}></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          dont have an account yet?{' '}
          <Link href={'/register'}>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
