

export const IconButton: React.FC<any> = (props) => {

  const {children} = props;
  return (
    <button className={`bg-transparent rounded hover:bg-gray-200 p-1`}>
      {children}
    </button>
  )
}