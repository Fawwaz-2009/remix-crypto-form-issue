import { ActionFunctionArgs, redirect, json, type MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const customerEmail = formData.get("customerEmail");

  if (typeof customerEmail !== "string" || !customerEmail) {
    return json({ errors: { customerEmail: "Email is required" } }, { status: 400 });
  }

  console.log(customerEmail);
  return redirect("/thank-you");
}

export default function Index() {
  return (
    <>
      <Form className="mt-6 grid grid-cols-1 gap-2" method="POST">
        <input type="email" name="customerEmail" placeholder="your email" className="bg-[#F0F0F0] placeholder:text-[#2E2514] p-6 text-lg text-black" />
        <button type="submit" className="w-full bg-[#2E2514] text-white font-bold text-lg p-6">
          submit
        </button>
      </Form>
    </>
  );
}
