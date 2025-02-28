body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.container {
    text-align: center;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px; 
    margin: 20px;
}

h1 {
    color: #007bff;
    font-size: 28px;
    margin-bottom: 20px;
}

.btn {
    background: linear-gradient(145deg, #007bff, #0056b3);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 18px;
    margin: 15px;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.popup {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.popup-content {
    background-color: white;
    border-radius: 10px;
    margin: 10% auto;
    padding: 20px;
    width: 350px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    cursor: pointer;
}

.stream-btn, .sem-btn, .sec-btn {
    background: linear-gradient(145deg, #28a745, #218838);
    color: white;
    border: none;
    border-radius: 25px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stream-btn:hover, .sem-btn:hover, .sec-btn:hover {
    background-color: #218838;
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.download-btn {
    background: linear-gradient(145deg, #17a2b8, #138496);
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.3s;
    display: inline-block;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
    background-color: #138496;
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.download-popup {
    background-color: #28a745;
    color: white;
    padding: 20px;
    border-radius: 10px;
}