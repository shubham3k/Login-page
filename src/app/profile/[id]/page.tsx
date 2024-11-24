export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Hi user this is your profile page</h1>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img
                    src="/home/sk/Downloads/minion-images.jpeg" // Replace with your image URL
                    alt="Profile"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #007BFF',
                    }}
                />
            </div> */}
            <hr />
            <p className="text-4xl">Profile page
                <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>

        </div>
    )
}