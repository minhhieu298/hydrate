import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

type LoginFormData = {
  LoginName: string;
  Password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      LoginName: "",
      Password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { LoginName, Password } = data;

    // const response = await fetch("https://rc.eztrade.fpts.com.vn/sg/api/gateway/v1/account/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ LoginName, Password }),
    // });
    const response = await axios.post(
      "https://rc.eztrade.fpts.com.vn/sg/api/gateway/v1/account/login",
      {
        LoginName,
        Password,
      }
    );

    if (response.data) {
      router.push("/profile");
    } else {
      // Handle errors (có thể thêm logic hiển thị lỗi từ server)
      console.log("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("LoginName")} />
      {errors.LoginName && <p>{errors.LoginName.message}</p>}

      <input type="password" placeholder="Password" {...register("Password")} />
      {errors.Password && <p>{errors.Password.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
}
