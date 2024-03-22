export default function AccountForm({
  className = "",
  children,
  method,
  name,
  photo,
  number,
  email,
  placeholder,
}) {
  return (
    <form action="" className={`${className}`} method={`${method}`}>
      <div className="w-64 h-64">
        <img
          className="w-[100%] h-[100%] rounded-md"
          src={`${photo}`}
          alt="Account logo"
        />
      </div>
      <div className="flex flex-col font-bold gap-4 w-1/3">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[#088016]">Name</label>
          <input
            type="text"
            className="bg-gray-50 border-b-2 border-[#08801660] w-full h-12 pl-2 flex items-center"
            id="name"
            name="name"
            placeholder={`${name}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="number" className="text-[#088016]">Number</label>
          <input
            type="text"
            className="bg-gray-50 border-b-2 border-[#08801660] w-full h-12 pl-2 flex items-center"
            id="number"
            name="number"
            placeholder={`${number}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[#088016]">Email</label>
          <input
            type="text"
            className="bg-gray-50 border-b-2 border-[#08801660] w-full h-12 pl-2 flex items-center"
            id="email"
            name="email"
            placeholder={`${email}`}
          />
        </div>
      </div>
      {children}
    </form>
  );
}
