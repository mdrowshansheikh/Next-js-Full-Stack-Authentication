import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import { useState } from 'react';
import { useFormik } from 'formik';
import { register_Validation } from '../lib/validate';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      Username: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: register_Validation,
    onSubmit,
  });

  async function onSubmit(values) {
    alert(values);
    console.log(values);
  }

  const [show, setShow] = useState({ password: false, cpassword: false });

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-1xl font-bold py-4">Register</h1>
        </div>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          <div
            className={`${styles.input_group} ${
              formik.errors.Username && formik.touched.Username
                ? 'border-rose-600'
                : ''
            }`}
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps('Username')}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {/* // Email Validation ================== Start */}
          {formik.errors.Username && formik.touched.Username ? (
            <span className="text-red-500 font-bold">
              {formik.errors.Username}
            </span>
          ) : (
            <></>
          )}
          {/* // Email Validation ================== End */}
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? 'border-rose-600'
                : ''
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
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
                ? 'border-rose-600'
                : ''
            }`}
          >
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* // Password Validation Message ==========================>  Start */}
          {formik.errors.password && formik.touched.password ? (
            <spna className="font-bold text-red-500">
              {formik.errors.password}
            </spna>
          ) : (
            <></>
          )}
          {/* // Password Validation Message ==========================>  End */}

          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? 'border-rose-600'
                : ''
            }`}
          >
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* // Cpassword Validation Message ==========================>  Start */}
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="font-bold text-red-500">
              {formik.errors.cpassword}
            </span>
          ) : (
            <></>
          )}
          {/* // Cpassword Validation Message ==========================>  End */}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{' '}
          <Link href={'/login'}>
            <a className="text-blue-700">Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
